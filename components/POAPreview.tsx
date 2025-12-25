"use client";

import * as React from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { FileText, Copy } from "lucide-react";

export function POAPreview({ content, className }: { content: string; className?: string }) {
  const isEmpty = !content.trim();
  const copyToClipboard = React.useCallback(async () => {
    if (isEmpty) return;
    await navigator.clipboard.writeText(content);
  }, [content, isEmpty]);

  return (
    <div className={cn("paper-surface relative h-full rounded-3xl border border-slate-200 p-8", className)}>
      <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-brand" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Amazon POA Preview</p>
            <p className="text-xs text-slate-500">Formatted for direct submission to Seller Performance</p>
          </div>
        </div>
        <Button type="button" variant="ghost" className="text-xs font-medium" disabled={isEmpty} onClick={copyToClipboard}>
          <Copy className="mr-1 h-4 w-4" />
          Copy
        </Button>
      </div>
      <div className="prose prose-slate max-w-none text-sm leading-relaxed md:text-base">
        {isEmpty ? (
          <p className="text-slate-400">Start by entering case details to generate a Plan of Action.</p>
        ) : (
          <ReactMarkdown>{content}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}
