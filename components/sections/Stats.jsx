export function Stats() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-4xl lg:text-5xl font-bold text-primary">
            11 Lakh+
          </h3>
          <p className="text-muted-foreground mt-2">
            Trust Care Me to sell online
          </p>
        </div>
        <div className="text-center bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-4xl lg:text-5xl font-bold text-primary">
            14 Crore+
          </h3>
          <p className="text-muted-foreground mt-2">
            Customers buying across Bangladesh
          </p>
        </div>
        <div className="text-center bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-4xl lg:text-5xl font-bold text-primary">
            19000+
          </h3>
          <p className="text-muted-foreground mt-2">
            Pincodes supported for delivery
          </p>
        </div>
        <div className="text-center bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-4xl lg:text-5xl font-bold text-primary">700+</h3>
          <p className="text-muted-foreground mt-2">
            Categories to sell online
          </p>
        </div>
      </div>
    </section>
  );
}
