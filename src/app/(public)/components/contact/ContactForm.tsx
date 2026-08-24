"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, Mail, User, Phone,} from "lucide-react";
import Input from "@/app/ui/Input";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";


const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: POST to /api/contact → Nodemailer sends email
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 1500);
  };

  return (
    <div>
      <div className="rounded-2xl border border-border bg-background p-6">
        {!done ? (
          <form action={FORMSPREE_ENDPOINT} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="First Name"
                type="text"
                placeholder="Awais Faryad"
                leftIcon={<User className="size-4" />}
                required
              />
              <Input
                label="Last Name"
                type="text"
                placeholder="Awais Faryad"
                leftIcon={<User className="size-4" />}
                required
              />
            </div>
            <Input
              label="Number"
              type="number"
              placeholder="+92123456789"
              leftIcon={<Phone className="size-4" />}
              required
            />

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell us what's on your mind..."
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-gold flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium text-white transition-colors hover:bg-secondary disabled:opacity-60"
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Send message
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
              <CheckCircle2 className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-base font-semibold text-foreground">
              Message sent!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
