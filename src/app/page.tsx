import Image from "next/image";

import { Button } from "@/app/_components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/_components/ui/drawer";

import { retrieveSpots } from "@/app/_data/spots";
import { Map, MapPinned, Navigation, Undo2 } from "lucide-react";

export default async function Home() {
  const spots = await retrieveSpots();
  return (
    <main className="min-h-dvh p-8 flex flex-col gap-4 max-w-[800px] mx-auto">
      {spots.map((spot, index) => (
        <div
          className="bg-white border w-full rounded-3xl p-4 flex flex-col gap-3"
          key={index}
        >
          <div className="rounded-2xl bg-neutral-100 w-full aspect-video relative p-2 flex justify-end">
            <Drawer>
              <DrawerTrigger asChild>
                <Button className="rounded-full bg-white/5 blur-backdrop border">
                  <Map className="w-4 h-4 mr-2" />
                  Direcciones
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="gap-0 border-b">
                  <DrawerTitle className="text-base font-normal">
                    Direcciones
                  </DrawerTitle>
                  <DrawerDescription>
                    Address Open Street Sumay
                  </DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-col gap-2 pt-2">
                  <Button
                    variant={"ghost"}
                    className="justify-start items-bottom rounded-none"
                  >
                    <MapPinned className="w-4 h-4 mr-2" />
                    Google Maps
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="justify-start items-bottom rounded-none"
                  >
                    <Navigation className="w-4 h-4 mr-2" /> Waze
                  </Button>
                  <DrawerClose className="border-t" asChild>
                    <Button
                      variant={"ghost"}
                      className="justify-start items-bottom rounded-none text-neutral-500 py-6"
                    >
                      <Undo2 className="w-4 h-4 mr-2" /> Regresar
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={spot.avatar} />
              <AvatarFallback>RG</AvatarFallback>
            </Avatar>
            <div className="leading-none">
              <h2 className="text-lg">{spot.title}</h2>
              <p className="text-neutral-400">{spot.description}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
