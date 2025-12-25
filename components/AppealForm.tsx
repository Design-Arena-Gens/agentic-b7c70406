"use client";

import * as React from "react";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { VIOLATION_TYPES } from "../lib/constants";
import { cn } from "../lib/utils";
import { Loader2, Wand2 } from "lucide-react";

const PLACEHOLDER_STORY = `Explain the full sequence:
- When & how the listing was flagged
- Internal SOP gaps (QA, invoices, sourcing)
- Corrective actions already taken
- Open escalations or conversations with rights owners`;

export function AppealForm({
  className,
  onPreview
}: {
  className?: string;
  onPreview: (content: string) => void;
}) {
  const [sellerName, setSellerName] = React.useState("");
  const [asin, setAsin] = React.useState("");
  const [violationType, setViolationType] = React.useState<(typeof VIOLATION_TYPES)[number]>(VIOLATION_TYPES[0]);
  const [rootCause, setRootCause] = React.useState("");

  const { messages, append, isLoading } = useChat({
    api: "/api/generate-appeal",
    onFinish(message) {
      onPreview(message.content);
    }
  });

  React.useEffect(() => {
    const latest = [...messages].reverse().find((msg) => msg.role === "assistant");
    if (latest) {
      onPreview(latest.content);
    }
  }, [messages, onPreview]);

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      sellerName,
      asin,
      violationType,
      rootCause
    };
    await append({
      role: "user",
      content: JSON.stringify(payload)
    });
  };

  return (
    <form className={cn("space-y-6", className)} onSubmit={onFormSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="sellerName">Seller Name</Label>
          <Input
            id="sellerName"
            placeholder="Amazon.sa or Amazon.ae storefront name"
            value={sellerName}
            onChange={(event) => setSellerName(event.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="asin">ASIN(s)</Label>
          <Input id="asin" placeholder="B0..." value={asin} onChange={(event) => setAsin(event.target.value)} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Violation Type</Label>
        <Select value={violationType} onValueChange={(value) => setViolationType(value as (typeof VIOLATION_TYPES)[number])}>
          <SelectTrigger>
            <SelectValue placeholder="Select violation type" />
          </SelectTrigger>
          <SelectContent>
            {VIOLATION_TYPES.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="story">The Story (Root Cause)</Label>
        <Textarea
          id="story"
          placeholder={PLACEHOLDER_STORY}
          value={rootCause}
          onChange={(event) => setRootCause(event.target.value)}
          required
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Reasoning…
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Generate Plan of Action
            </>
          )}
        </Button>
        <p className="text-xs text-slate-500">
          Response streams live. Tailor details to align with your documentation before submission.
        </p>
      </div>
    </form>
  );
}
