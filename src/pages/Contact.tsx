import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xjglvaqz", {
      method: "POST",
      headers: {"Content-Type": "application/json", Accept: "application/json"},
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Message envoyé ✔");
      setForm({ name: "", email: "", message: "" });
    }else{
      alert("Erreur lors de l'envoi");
    }

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="max-w-xl mx-auto grid gap-6">
      <h1 className="text-2xl font-semibold">Contact</h1>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 border border-border rounded-2xl p-6 bg-background shadow-sm"
      >
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          className="px-3 py-2 rounded-xl
            border border-border
            bg-background text-foreground
            placeholder:text-muted-foreground
            focus:outline-none focus:ring-2 focus:ring-primary
            transition"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="px-3 py-2 rounded-xl
            border border-border
            bg-background text-foreground
            placeholder:text-muted-foreground
            focus:outline-none focus:ring-2 focus:ring-primary
            transition"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="px-3 py-2 rounded-xl
            border border-border
            bg-background text-foreground
            placeholder:text-muted-foreground
            min-h-[120px]
            focus:outline-none focus:ring-2 focus:ring-primary
            transition"
          required
        />

        <button
          type="submit"
          className="bg-primary text-primary-foreground
            rounded-xl py-2
            hover:opacity-90
            transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
