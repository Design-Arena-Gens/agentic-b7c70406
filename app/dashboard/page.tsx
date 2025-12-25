"use client";

import * as React from "react";
import { AppealForm } from "../../components/AppealForm";
import { POAPreview } from "../../components/POAPreview";
import { Button } from "../../components/ui/button";
import { ArrowLeft, FileBarChart } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [preview, setPreview] = React.useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="container flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <FileBarChart className="h-8 w-8 text-brand" />
            <div>
              <p className="text-sm uppercase tracking-wide text-brand">AMZ-Resurrect Command Center</p>
              <h1 className="text-xl font-semibold text-slate-900">Generate Investigator-Grade Plans of Action</h1>
            </div>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-brand">
              <ArrowLeft className="h-4 w-4" />
              Back to Landing
            </Link>
          </Button>
        </div>
      </header>
      <main className="container py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg backdrop-blur">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-900">Case Intake</h2>
              <p className="text-sm text-slate-500">
                Feed the exact facts as you would to Seller Performance. Be precise with documentation, dates, and
                owners.
              </p>
            </div>
            <AppealForm onPreview={setPreview} />
          </div>
          <POAPreview content={preview} />
        </div>
      </main>
    </div>
  );
}
