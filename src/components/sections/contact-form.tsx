"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "", honeypot: "" },
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Échec de l'envoi");
      }
      toast.success("Message envoyé ✨", {
        description: "Merci, je reviens vers vous sous 24h.",
      });
      reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erreur inattendue";
      toast.error("Échec de l'envoi", { description: message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Nom complet"
          id="name"
          error={errors.name?.message}
          required
        >
          <Input
            id="name"
            placeholder="Jean Dupont"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>
        <Field label="Email" id="email" error={errors.email?.message} required>
          <Input
            id="email"
            type="email"
            placeholder="vous@entreprise.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
      </div>

      <Field label="Sujet" id="subject" error={errors.subject?.message} required>
        <Input
          id="subject"
          placeholder="Idée de SaaS, mission ponctuelle, refonte..."
          aria-invalid={!!errors.subject}
          {...register("subject")}
        />
      </Field>

      <Field
        label="Votre message"
        id="message"
        error={errors.message?.message}
        required
      >
        <Textarea
          id="message"
          rows={6}
          placeholder="Parlez-moi du contexte, de votre objectif et des contraintes principales."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        {...register("honeypot")}
      />

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <p className="text-xs text-muted-foreground">
          En envoyant ce message, vous acceptez d'être recontacté(e) à l'email
          fourni.
        </p>
        <Button
          type="submit"
          size="lg"
          variant="glow"
          className="rounded-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Envoyer le message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="flex items-center gap-1">
        {label}
        {required && <span className="text-primary">*</span>}
      </Label>
      {children}
      {error && (
        <p
          className={cn(
            "text-xs text-destructive transition-opacity duration-200",
            error ? "opacity-100" : "opacity-0"
          )}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
