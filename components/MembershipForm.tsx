'use client';

import { FormEvent, useState } from 'react';

const fields = [
  { name: 'nom', label: 'Nom et prénoms', type: 'text' },
  { name: 'telephone', label: 'Téléphone', type: 'tel' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'quartier', label: 'Quartier', type: 'text' },
] as const;

export default function MembershipForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
        <p className="font-lexend text-xs font-bold uppercase tracking-wider text-brand-clay">
          Demande enregistrée dans la maquette
        </p>
        <h2 className="mt-3 font-poppins text-2xl font-bold text-brand-navy">
          Merci, votre message est bien reçu ici
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Rien n’a encore été envoyé à l’ADA : cette étape montre le parcours. Dès que la messagerie de l’association sera reliée, la même demande arrivera au Responsable de la Communication.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-lg bg-brand-navy px-5 py-3 font-poppins text-sm font-bold uppercase tracking-wide text-white"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
      <h2 className="font-poppins text-2xl font-bold text-brand-navy">Écrire à l’ADA</h2>
      <p className="mt-2 text-sm text-gray-600">
        Adhésion, information ou partenariat. Les champs suffisent pour la présentation de ce soir.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="block text-sm font-medium text-brand-ink">
            {field.label}
            <input
              required
              name={field.name}
              type={field.type}
              className="mt-1.5 w-full rounded-lg border border-gray-200 bg-brand-ivory px-3 py-3 text-sm outline-none ring-brand-clay focus:ring-2"
            />
          </label>
        ))}
        <label className="block text-sm font-medium text-brand-ink sm:col-span-2">
          Motif
          <select
            name="motif"
            required
            className="mt-1.5 w-full rounded-lg border border-gray-200 bg-brand-ivory px-3 py-3 text-sm outline-none ring-brand-clay focus:ring-2"
            defaultValue="Adhésion"
          >
            <option>Adhésion</option>
            <option>Demande d’information</option>
            <option>Partenariat</option>
            <option>Autre</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-brand-ink sm:col-span-2">
          Message
          <textarea
            required
            name="message"
            rows={5}
            className="mt-1.5 w-full rounded-lg border border-gray-200 bg-brand-ivory px-3 py-3 text-sm outline-none ring-brand-clay focus:ring-2"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 rounded-lg bg-brand-clay px-6 py-3 font-poppins text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-clay-dark"
      >
        Envoyer la demande
      </button>
    </form>
  );
}
