'use client';

import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  PARTNER_EMAIL_MAX,
  PARTNER_FULL_NAME_MAX,
  PARTNER_MESSAGE_MAX,
  partnerInquirySchema,
  type PartnerInquiryInput,
} from '@/lib/partner-inquiry';
import { cn } from '@/lib/utils';

type PartnerInquiryDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function PartnerInquiryDialog({ open, onOpenChange }: PartnerInquiryDialogProps) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const form = useForm<PartnerInquiryInput>({
    resolver: zodResolver(partnerInquirySchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (!open) {
      form.reset();
      setSubmitError(null);
      setSubmitted(false);
      setHoneypot('');
    }
  }, [open, form]);

  const onSubmit = form.handleSubmit(async (values) => {
    setSubmitError(null);

    try {
      const response = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          companyWebsite: honeypot,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setSubmitError(data?.error || 'Could not send your message. Please try again.');
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError('Could not send your message. Please try again.');
    }
  });

  const isSubmitting = form.formState.isSubmitting;
  const canSubmit = form.formState.isValid && !isSubmitting;
  const fieldClassName =
    'border-meros-border bg-white text-meros-text-strong shadow-none outline-none transition-[border-color] focus:border-meros-primary focus:ring-0 focus:shadow-none focus-visible:border-meros-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(90vh,720px)] overflow-hidden p-0 sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle>Partner with us</DialogTitle>
          <DialogDescription>
            Tell us about your business and let&apos;s explore how we can work together to reach
            more travelers.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col">
            <div className="px-6 py-10 text-center">
              <p className="text-base font-medium text-meros-text-strong">Message sent</p>
              <p className="mt-2 text-sm text-meros-text-body">
                Thanks — we&apos;ll get back to you soon.
              </p>
            </div>
            <DialogFooter>
              <Button
                type="button"
                className="h-10 rounded-full bg-meros-primary px-5 text-white hover:bg-meros-primary-hover"
                onClick={() => onOpenChange(false)}
              >
                Close
              </Button>
            </DialogFooter>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={onSubmit} className="flex max-h-[min(70vh,560px)] flex-col">
              <div className="flex flex-col gap-5 overflow-y-auto px-6 py-5">
                <div
                  className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
                  aria-hidden
                >
                  <label htmlFor="companyWebsite">Company website</label>
                  <input
                    id="companyWebsite"
                    name="companyWebsite"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => {
                    const atLimit = field.value.length >= PARTNER_FULL_NAME_MAX;

                    return (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-meros-text-strong">
                          Full name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            autoComplete="name"
                            className={cn(
                              'h-11 rounded-xl',
                              fieldClassName,
                              atLimit &&
                                'border-destructive focus:border-destructive focus-visible:border-destructive',
                            )}
                            {...field}
                            maxLength={PARTNER_FULL_NAME_MAX}
                          />
                        </FormControl>
                        {atLimit ? (
                          <p className="text-sm text-destructive" role="status">
                            Character limit reached ({PARTNER_FULL_NAME_MAX}).
                          </p>
                        ) : (
                          <FormMessage />
                        )}
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => {
                    const atLimit = field.value.length >= PARTNER_EMAIL_MAX;

                    return (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-meros-text-strong">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            autoComplete="email"
                            className={cn(
                              'h-11 rounded-xl',
                              fieldClassName,
                              atLimit &&
                                'border-destructive focus:border-destructive focus-visible:border-destructive',
                            )}
                            {...field}
                            maxLength={PARTNER_EMAIL_MAX}
                          />
                        </FormControl>
                        {atLimit ? (
                          <p className="text-sm text-destructive" role="status">
                            Character limit reached ({PARTNER_EMAIL_MAX}).
                          </p>
                        ) : (
                          <FormMessage />
                        )}
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between gap-3">
                        <FormLabel className="text-sm font-semibold text-meros-text-strong">
                          Message
                        </FormLabel>
                        <span
                          className={cn(
                            'text-xs',
                            field.value.length >= PARTNER_MESSAGE_MAX
                              ? 'font-medium text-destructive'
                              : 'text-meros-text-body/70',
                          )}
                        >
                          {field.value.length}/{PARTNER_MESSAGE_MAX}
                        </span>
                      </div>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your business..."
                          rows={5}
                          className={cn(
                            'min-h-[120px] resize-y rounded-xl',
                            fieldClassName,
                            field.value.length >= PARTNER_MESSAGE_MAX &&
                              'border-destructive focus:border-destructive focus-visible:border-destructive',
                          )}
                          {...field}
                          maxLength={PARTNER_MESSAGE_MAX}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {submitError ? (
                  <p className="text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                ) : null}
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 rounded-full border-meros-border px-5 text-meros-text-strong"
                  onClick={() => onOpenChange(false)}
                  disabled={isSubmitting}
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="h-10 rounded-full bg-meros-primary px-5 text-white hover:bg-meros-primary-hover disabled:bg-meros-border disabled:text-white disabled:opacity-100"
                >
                  {isSubmitting ? 'Sending…' : 'Send'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
