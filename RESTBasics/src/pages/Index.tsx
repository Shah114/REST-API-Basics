import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIsAPISection from "@/components/WhatIsAPISection";
import WhatIsRESTSection from "@/components/WhatIsRESTSection";
import HTTPMethodsSection from "@/components/HTTPMethodsSection";
import RequestResponseSection from "@/components/RequestResponseSection";
import StatusCodesSection from "@/components/StatusCodesSection";
import APIFlowSection from "@/components/APIFlowSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WhatIsAPISection />
      <WhatIsRESTSection />
      <HTTPMethodsSection />
      <RequestResponseSection />
      <StatusCodesSection />
      <APIFlowSection />
      <Footer />
    </div>
  );
};

export default Index;
