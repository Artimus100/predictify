import Link from "next/link"
import { ArrowUpRight, ChevronRight, DollarSign, History, TrendingUp, Trophy } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Progress } from "../../components/ui/progress"
import { Badge } from "../../components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">View your prediction activity and performance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,245.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Across 8 different markets</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">17 wins out of 25 resolved positions</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="mt-8">
        <TabsList>
          <TabsTrigger value="active">Active Positions</TabsTrigger>
          <TabsTrigger value="history">Position History</TabsTrigger>
          <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Positions</CardTitle>
              <CardDescription>Your current open positions across all markets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link
                        href="/markets/will-bitcoin-reach-100k-by-end-of-2025"
                        className="font-medium hover:underline"
                      >
                        Will Bitcoin reach $100k by end of 2025?
                      </Link>
                      <div className="mt-1 flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          Crypto
                        </Badge>
                        <span className="text-xs text-muted-foreground">Ends: Dec 31, 2025</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="/markets/will-bitcoin-reach-100k-by-end-of-2025">
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-4 grid gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Your position: Yes</span>
                        <Badge className="bg-green-500 hover:bg-green-600">+12%</Badge>
                      </div>
                      <span className="font-medium">$200</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>Current probability</span>
                        <span>68%</span>
                      </div>
                      <Progress value={68} className="h-1.5" />
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Entry price: 56%</span>
                      <span>Potential payout: $357.14</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link
                        href="/markets/will-ethereum-2-0-fully-launch-in-2024"
                        className="font-medium hover:underline"
                      >
                        Will Ethereum 2.0 fully launch in 2024?
                      </Link>
                      <div className="mt-1 flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          Crypto
                        </Badge>
                        <span className="text-xs text-muted-foreground">Ends: Dec 31, 2024</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="/markets/will-ethereum-2-0-fully-launch-in-2024">
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-4 grid gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Your position: Yes</span>
                        <Badge className="bg-green-500 hover:bg-green-600">+5%</Badge>
                      </div>
                      <span className="font-medium">$150</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>Current probability</span>
                        <span>82%</span>
                      </div>
                      <Progress value={82} className="h-1.5" />
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Entry price: 77%</span>
                      <span>Potential payout: $182.93</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Browse More Markets
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="history">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Position History</CardTitle>
              <CardDescription>Your past resolved positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Will NFT trading volume exceed $10B in 2023?</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          NFTs
                        </Badge>
                        <Badge className="bg-green-500 hover:bg-green-600">Won</Badge>
                      </div>
                    </div>
                    <History className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="mt-4 grid gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Your position: No</span>
                      <span className="font-medium">+$120.50</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Resolved: Jan 1, 2024</span>
                      <span>ROI: +60.25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="watchlist">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Your Watchlist</CardTitle>
              <CardDescription>Markets youre keeping an eye on</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <p className="text-sm text-muted-foreground">You havent added any markets to your watchlist yet.</p>
                <Button className="mt-4" asChild>
                  <Link href="/">Browse Markets</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Leaderboard</CardTitle>
            <CardDescription>Top predictors this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                    {i}
                  </div>
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">User{i}</p>
                    <p className="text-xs text-muted-foreground">Win rate: {90 - i * 5}%</p>
                  </div>
                  <div className="text-sm font-medium">+${1000 - i * 200}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Full Leaderboard
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Markets</CardTitle>
            <CardDescription>Based on your activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-1">
                    <Link href="#" className="text-sm font-medium hover:underline">
                      Will Apple release AR glasses in 2024?
                    </Link>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Technology
                      </Badge>
                      <span className="text-xs text-muted-foreground">45% Yes</span>
                    </div>
                  </div>
                  <Button size="sm">Trade</Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

