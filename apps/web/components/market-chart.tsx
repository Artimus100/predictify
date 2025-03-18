"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts"

const data = [
  { date: "Jan", yes: 25, no: 75 },
  { date: "Feb", yes: 30, no: 70 },
  { date: "Mar", yes: 35, no: 65 },
  { date: "Apr", yes: 40, no: 60 },
  { date: "May", yes: 45, no: 55 },
  { date: "Jun", yes: 52, no: 48 },
  { date: "Jul", yes: 58, no: 42 },
  { date: "Aug", yes: 63, no: 37 },
  { date: "Sep", yes: 68, no: 32 },
]

export function MarketChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value: unknown) => `${value}%`}
          />
          <Tooltip
            content={({ active, payload }: TooltipProps<number, string>) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-xs font-medium">Yes:</span>
                        <span className="text-xs">{payload[0].value}%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-destructive" />
                        <span className="text-xs font-medium">No:</span>
                        <span className="text-xs">{payload[1].value}%</span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line type="monotone" dataKey="yes" stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="no" stroke="hsl(var(--destructive))" strokeWidth={2} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

