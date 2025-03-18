"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export function BetModal() {
  const [amount, setAmount] = React.useState(100)
  const [outcome, setOutcome] = React.useState("yes")

  // Calculate potential payout based on current odds
  const potentialPayout = outcome === "yes" ? (amount / 0.68).toFixed(2) : (amount / 0.32).toFixed(2)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Place Bet</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Place Your Bet</DialogTitle>
          <DialogDescription>Choose an outcome and enter your bet amount.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="outcome">Select Outcome</Label>
            <Select value={outcome} onValueChange={setOutcome}>
              <SelectTrigger id="outcome">
                <SelectValue placeholder="Select outcome" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes (68%)</SelectItem>
                <SelectItem value="no">No (32%)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="amount">Bet Amount</Label>
              <span className="text-sm text-muted-foreground">${amount}</span>
            </div>
            <Slider
              id="amount"
              min={10}
              max={1000}
              step={10}
              defaultValue={[100]}
              onValueChange={(values: React.SetStateAction<number>[]) => setAmount(values[0])}
              className="py-2"
            />
            <div className="flex items-center space-x-2">
              <Button  onClick={() => setAmount(50)}>
                $50
              </Button>
              <Button  onClick={() => setAmount(100)}>
                $100
              </Button>
              <Button  onClick={() => setAmount(500)}>
                $500
              </Button>
            </div>
          </div>
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between text-sm">
                <span>Potential Payout:</span>
                <span className="font-medium">${potentialPayout}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Current Odds:</span>
                <span className="font-medium">{outcome === "yes" ? "68%" : "32%"}</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <DialogFooter>
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit">Confirm Bet</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

