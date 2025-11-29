"use client"

import { Badge } from "@/components/ui/badge"
import { Payment } from "@/data/payments.data"
import { ColumnDef } from "@tanstack/react-table"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"




export const columns: ColumnDef<Payment>[] = [

    

    {
      accessorKey: "clientName",
      header: "Client Name",
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style : "currency",
                currency: "USD",
            }).format(amount)
            
            return <div className="text-right font-medium">{formatted}</div>
        },
    },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
        const status = row.getValue("status") as string
        const variant = {
            pending : "info",
            success: "success",
            failed: "destructive", 
            processing: "outline", //Para ponerle de badge al status
        }[status] ?? ('default') as any;

        return <Badge variant = { variant }>{status}</Badge>
    },


  },
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    id: "actions", //Los tres punticos ...
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id)
                toast("Payment ID copied to the clipboard", {
                    position : "top-right", 
                });//Para el mensaje de aviso, toast de sonner , ya el toast como tal no existe 
              }} //Para que se copie todo en el clipboard
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]