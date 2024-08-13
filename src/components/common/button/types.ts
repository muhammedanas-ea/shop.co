import React from "react";

type buttonTypes = "submit" | "reset" | "button"

export interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?:React.ReactNode
    type?: buttonTypes
    className?: string
}