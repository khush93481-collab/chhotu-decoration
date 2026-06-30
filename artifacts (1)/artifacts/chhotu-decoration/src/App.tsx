import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useScroll } from '@/hooks/use-scroll';

// Components
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { MarketingStrip } from '@/components/marketing-strip';
import { Gallery } from '@/components/gallery';
import { Services } from '@/components/services';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Testimonials } from '@/components/testimonials';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { FloatingButtons } from '@/components/floating-buttons';

const queryClient = new QueryClient();

function Home() {
  const { scrolled } = useScroll();

  return (
    <main className="min-h-screen bg-black text-white w-full overflow-x-hidden font-sans">
      <Navbar scrolled={scrolled} />
      <Hero />
      <MarketingStrip />
      <Gallery />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Switch>
            <Route path="/" component={Home} />
            <Route>
              <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col">
                <h1 className="text-4xl font-serif text-primary mb-4">404</h1>
                <p>Page not found</p>
                <a href="/" className="mt-6 text-primary underline">Return Home</a>
              </div>
            </Route>
          </Switch>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
