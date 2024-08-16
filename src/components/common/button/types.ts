import React from "react";

type buttonTypes = "submit" | "reset" | "button"
type variant = "solid" | "outline" | "ghost"

export interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?:React.ReactNode
    type?: buttonTypes
    className?: string
    variant?:variant
}