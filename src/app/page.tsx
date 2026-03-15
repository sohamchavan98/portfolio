import ScrollyCanvas from '@/components/ScrollyCanvas';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen">
      
      {/* The ScrollyCanvas component contains the sticky 500vh container */}
      <ScrollyCanvas />
      
      {/* The Parallax Overlay is now rendered inside ScrollyCanvas to sync with its scroll container */}

      <About />
      <Experience />

      {/* 
        The Projects component acts as the "rest of the content" once the user scrolls 
        past the 500vh container 
      */}
      <Projects />

    </main>
  );
}
