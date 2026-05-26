"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CalendarSection() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card className="mt-6 shadow-md rounded-2xl border-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-brand-mint/20 to-white pb-2">
        <CardTitle className="text-brand-dark flex items-center gap-2">
          📅 Calendario de Actividades
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-xl border-0"
        />
      </CardContent>
    </Card>
  )
}