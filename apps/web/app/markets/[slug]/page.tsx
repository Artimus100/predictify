import Link from "next/link"
import { ArrowLeft, Calendar, DollarSign, Share2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BetModal } from "@/components/bet-modal"
import { MarketChart } from "@/components/market-chart"
type tParams = Promise<{ slug: string[] }>;

export default async function MarketDetailsPage({ params }: { params: tParams }) {
  // In a real app, you would fetch the market data based on the slug
  const { slug } = await params
  const marketTitle =    <p>ID: {slug}</p>


  return (
    <div className="container py-10">
      <div className="mb-6 flex items-center">
        <Button asChild className="mr-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Badge variant="outline">Crypto</Badge>
            <Badge
              variant="outline"
              className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-500 dark:hover:bg-yellow-900/30"
            >
              Featured
            </Badge>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">{marketTitle}</h1>
          <p className="text-muted-foreground">Predict if Bitcoin will hit $100,000 before December 31, 2025</p>
        </div>
        <Button className="ml-auto">
          <Share2 className="h-4 w-4" />
          <span className="sr-only">Share</span>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Price History</CardTitle>
            </CardHeader>
            <CardContent>
              <MarketChart />
            </CardContent>
          </Card>

          <Tabs defaultValue="details">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Market Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="text-sm text-muted-foreground">
                      This market will resolve to Yes if the price of Bitcoin (BTC) reaches or exceeds $100,000 USD on
                      any major exchange before December 31, 2025, 23:59:59 UTC. It will resolve to No if the price
                      does not reach $100,000 USD before this deadline.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Resolution Date</p>
                        <p className="text-xs text-muted-foreground">Dec 31, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Trading Volume</p>
                        <p className="text-xs text-muted-foreground">$245,678</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border p-3">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Participants</p>
                        <p className="text-xs text-muted-foreground">1,245 traders</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Recent trades and market activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Activity items would go here */}
                    <p className="text-sm text-muted-foreground">Loading activity data...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="discussion">
              <Card>
                <CardHeader>
                  <CardTitle>Market Discussion</CardTitle>
                  <CardDescription>Join the conversation about this market</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Discussion thread would go here */}
                    <p className="text-sm text-muted-foreground">No comments yet. Be the first to comment!</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Add Comment
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Probabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Yes</span>
                  <span className="font-medium">68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">No</span>
                  <span className="font-medium">32%</span>
                </div>
                <Progress value={32} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <BetModal />
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Position</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">You have no position in this market yet.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Traders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Top traders would go here */}
                <p className="text-sm text-muted-foreground">Loading top traders...</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

