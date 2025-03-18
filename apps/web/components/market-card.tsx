import Link from "next/link"
import { CalendarDays, DollarSign } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface Outcome {
  name: string
  probability: number
}

interface MarketCardProps {
  title: string
  description: string
  category: string
  volume: string
  endDate: string
  outcomes: Outcome[]
  isNew?: boolean
}

export function MarketCard({
  title,
  description,
  category,
  volume,
  endDate,
  outcomes,
  isNew = false,
}: MarketCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <Badge variant="outline" className="mb-2">
            {category}
          </Badge>
          {isNew && <Badge className="bg-green-500 hover:bg-green-600">New</Badge>}
        </div>
        <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          {outcomes.map((outcome, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span>{outcome.name}</span>
                <span className="font-medium">{outcome.probability}%</span>
              </div>
              <Progress value={outcome.probability} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center text-xs text-muted-foreground">
            <DollarSign className="mr-1 h-3 w-3" />
            <span>{volume}</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarDays className="mr-1 h-3 w-3" />
            <span>Ends: {endDate}</span>
          </div>
        </div>
        <Button asChild>
          <Link href={`/markets/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}>Trade</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

