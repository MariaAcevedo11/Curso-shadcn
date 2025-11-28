import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MenubarTrigger, Menubar, MenubarMenu, MenubarContent, MenubarItem, MenubarSeparator, MenubarSubContent, MenubarSub, MenubarSubTrigger } from "@/components/ui/menubar";

export default function prueba() {


  return (
    
    <div>

      {/* Menubar */}

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Archivo</MenubarTrigger>

            <MenubarContent>
              
              <MenubarItem>Inicio</MenubarItem>
              <MenubarItem>Nuevo</MenubarItem>
              <MenubarItem>Abrir</MenubarItem>
              <MenubarItem>Compartir</MenubarItem>

              <MenubarSeparator />
              
              <MenubarItem>Información</MenubarItem>
              <MenubarItem>Guardar</MenubarItem>
              <MenubarItem>Guardar como</MenubarItem>
              <MenubarItem>
                Imprimir   {/* Poner el print real */}
              </MenubarItem>

              <MenubarItem>Exportar</MenubarItem>
              <MenubarItem>
                Cerrar  {/* Poner el de goBack */}
              </MenubarItem>

            </MenubarContent>
        </MenubarMenu>
          
          
        <MenubarMenu>

          <MenubarTrigger>Inicio</MenubarTrigger>
            {/* Poner el print real */}<MenubarContent>
              
              <MenubarItem>Lo que quieras</MenubarItem>

            </MenubarContent>

        </MenubarMenu>


        <MenubarMenu>
          <MenubarTrigger>Insertar</MenubarTrigger>

            <MenubarContent>
              
                <MenubarSub>
                <MenubarSubTrigger>Tabla</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Tamaño</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>2x2</MenubarItem>
                  <MenubarItem>3x3</MenubarItem>
                  <MenubarItem>4x4</MenubarItem>
                  <MenubarItem>Other...</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>

              <MenubarItem>Imágen</MenubarItem>
              <MenubarItem>Forma</MenubarItem>
              <MenubarItem>Cuadro de texto</MenubarItem>

              <MenubarSeparator />
              
              <MenubarItem>Línea de firma</MenubarItem>
              <MenubarItem>Ecuación</MenubarItem>
              <MenubarItem>Símbolo</MenubarItem>

            </MenubarContent>
        </MenubarMenu>

      </Menubar>


      {/* Card */}
      <Card className="mt-10">
        <CardHeader className="flex flex-col gap-2">
          
          <Avatar className = "h-16 w-16">
            <AvatarImage src = ""></AvatarImage>
            <AvatarFallback>404</AvatarFallback>     
          </Avatar>


          <CardTitle>Titulo deseado</CardTitle>
          <CardDescription>Descripción deseada</CardDescription>
          
        </CardHeader>
      </Card>

      {/* Button */}

      <div className = "mt-10 grid grid-cols-2 gap-2">

        <Button variant = "lolipop" capitalize = {true}>
          variante lolipop capitalize true
        </Button>

    
        <Button variant = "getCrazyBro">
          Variante GetCrazyBro capitalize false
        </Button>

      </div>

      {/* Checkbox */}

     <div className="flex items-start gap-3 mt-10">
        <Checkbox id="terms-2" defaultChecked />
        <div className="grid gap-2">
          <Label htmlFor="terms-2">Agree to Disagree bruh</Label>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you will die.
          </p>
        </div>
      
      </div>



    </div>

  );
}