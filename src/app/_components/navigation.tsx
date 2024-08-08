import { Button } from "@/app/_components/ui/button";

export default function Navigation() {
  return <nav className="flex gap-1">
    <Button className="rounded-full border text-base font-normal bg-white/20 backdrop-blur" variant={'outline'}>Compartir</Button> 
    <Button className="rounded-full border text-base font-normal bg-white/20 backdrop-blur" variant={'outline'}>Apoyar el proyecto</Button> 
  </nav>;
}
