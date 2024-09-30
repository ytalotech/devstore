'use client'

import { useCart } from "@/contexts/cart-context";
import { ShoppingBag } from "lucide-react";

export function CartWidget(){
    const { items } = useCart(); // Assuming useCart hook is available

    return (
        <div className="flex items-center gap-2">
            <ShoppingBag className="h-4" />
            <span className="text-sm">Cart ({ items.length })</span>
          </div>
    )
}