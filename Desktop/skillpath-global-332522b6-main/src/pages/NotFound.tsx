import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section">
        <div className="container-tight text-center">
          <span className="mb-4 inline-block text-6xl font-bold text-accent">404</span>
          <h1 className="text-3xl md:text-4xl">Page not found</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
