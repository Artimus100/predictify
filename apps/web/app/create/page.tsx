import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { DatePicker } from "../../components/date-picker"

export default function CreateMarketPage() {
  return (
    <div className="container max-w-4xl py-10">
      <div className="mb-8 flex items-center">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create a Prediction Market</h1>
          <p className="text-muted-foreground">Set up a new market for users to predict outcomes</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Market Details</CardTitle>
          <CardDescription>Provide the basic information about your prediction market</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Market Title</Label>
            <Input id="title" placeholder="e.g., Will Bitcoin reach $100k by end of 2025?" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide details about this prediction market..."
              className="min-h-[100px]"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crypto">Crypto</SelectItem>
                  <SelectItem value="politics">Politics</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="climate">Climate</SelectItem>
                  <SelectItem value="space">Space</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-date">Resolution Date</Label>
              <DatePicker />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Possible Outcomes</Label>
              <Button>
                Add Outcome
              </Button>
            </div>

            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="space-y-2">
                  <Label htmlFor="outcome-1">Outcome 1</Label>
                  <Input id="outcome-1" defaultValue="Yes" />
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="space-y-2">
                  <Label htmlFor="outcome-2">Outcome 2</Label>
                  <Input id="outcome-2" defaultValue="No" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="initial-liquidity">Initial Liquidity</Label>
            <div className="flex items-center">
              <Input id="initial-liquidity" type="number" placeholder="100" className="rounded-r-none" />
              <Select>
                <SelectTrigger className="w-[120px] rounded-l-none border-l-0">
                  <SelectValue placeholder="Token" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usdc">USDC</SelectItem>
                  <SelectItem value="eth">ETH</SelectItem>
                  <SelectItem value="dai">DAI</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline">Save as Draft</Button>
          <Button>Create Market</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

