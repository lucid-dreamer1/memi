const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl font-medium">Memi Nails</p>
          <p className="font-body text-sm text-background/60">
            © {new Date().getFullYear()} Memi Nails. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
