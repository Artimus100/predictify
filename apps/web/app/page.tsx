import Link from "next/link"
import { TrendingUp, Search, Plus, Wallet } from "lucide-react"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { MarketCard } from "../components/market-card"
import  {ThemeToggle} from "../components/Theme-Toggle"
export default function Home() {
  return (

    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6" />
            <span className="text-xl font-bold">Predictify</span>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:px-6">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search markets..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle/>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
            <Button asChild size="sm">
              <Link href="/create">
                <Plus className="mr-2 h-4 w-4" />
                Create Market
              </Link>
            </Button>

            <Link href="/dashboard">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            </Link>

          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-6 md:py-10">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Prediction Markets</h1>
              <p className="text-muted-foreground">Discover trending markets or create your own</p>
            </div>
            <div className="flex w-full items-center gap-2 md:w-auto">
              <div className="relative w-full md:hidden">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search markets..." className="w-full bg-background pl-8" />
              </div>
              <Button variant="outline" size="sm" className="ml-auto md:ml-0">
                Filter
              </Button>
            </div>
          </div>
          <Tabs defaultValue="trending" className="mt-6">
            <TabsList>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="newest">Newest</TabsTrigger>
              <TabsTrigger value="closing-soon">Closing Soon</TabsTrigger>
              <TabsTrigger value="volume">Highest Volume</TabsTrigger>
            </TabsList>
            <TabsContent value="trending" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <MarketCard
                  title="Will Bitcoin reach $100k by end of 2025?"
                  description="Predict if Bitcoin will hit $100,000 before December 31, 2025"
                  category="Crypto"
                  volume="$245,678"
                  endDate="Dec 31, 2025"
                  outcomes={[
                    { name: "Yes", probability: 68 },
                    { name: "No", probability: 32 },
                  ]}
                />
                <MarketCard
                  title="Will AI regulation pass in the US this year?"
                  description="Predict if comprehensive AI regulation will be passed in the United States"
                  category="Politics"
                  volume="$189,432"
                  endDate="Dec 31, 2024"
                  outcomes={[
                    { name: "Yes", probability: 42 },
                    { name: "No", probability: 58 },
                  ]}
                />
                <MarketCard
                  title="Will SpaceX land humans on Mars by 2030?"
                  description="Predict if SpaceX will successfully land a crewed mission on Mars"
                  category="Space"
                  volume="$356,789"
                  endDate="Dec 31, 2030"
                  outcomes={[
                    { name: "Yes", probability: 23 },
                    { name: "No", probability: 77 },
                  ]}
                />
                <MarketCard
                  title="Will Ethereum 2.0 fully launch in 2024?"
                  description="Predict if Ethereum will complete its transition to proof of stake"
                  category="Crypto"
                  volume="$198,765"
                  endDate="Dec 31, 2024"
                  outcomes={[
                    { name: "Yes", probability: 82 },
                    { name: "No", probability: 18 },
                  ]}
                />
                <MarketCard
                  title="Will global temperatures rise by more than 1.5°C by 2030?"
                  description="Predict if global average temperatures will exceed the Paris Agreement target"
                  category="Climate"
                  volume="$287,654"
                  endDate="Dec 31, 2030"
                  outcomes={[
                    { name: "Yes", probability: 76 },
                    { name: "No", probability: 24 },
                  ]}
                />
                <MarketCard
                  title="Will a CBDC launch in the US by end of 2025?"
                  description="Predict if the US will launch a Central Bank Digital Currency"
                  category="Finance"
                  volume="$176,543"
                  endDate="Dec 31, 2025"
                  outcomes={[
                    { name: "Yes", probability: 37 },
                    { name: "No", probability: 63 },
                  ]}
                />
              </div>
            </TabsContent>
            <TabsContent value="newest" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Similar grid of MarketCard components would go here */}
                <MarketCard
                  title="Will Apple release AR glasses in 2024?"
                  description="Predict if Apple will release augmented reality glasses this year"
                  category="Technology"
                  volume="$87,654"
                  endDate="Dec 31, 2024"
                  outcomes={[
                    { name: "Yes", probability: 45 },
                    { name: "No", probability: 55 },
                  ]}
                  isNew={true}
                />
                <MarketCard
                  title="Will the next US president be a Democrat?"
                  description="Predict the outcome of the upcoming US presidential election"
                  category="Politics"
                  volume="$432,198"
                  endDate="Nov 5, 2024"
                  outcomes={[
                    { name: "Yes", probability: 51 },
                    { name: "No", probability: 49 },
                  ]}
                  isNew={true}
                />
              </div>
            </TabsContent>
            <TabsContent value="closing-soon">{/* Content for closing soon tab */}</TabsContent>
            <TabsContent value="volume">{/* Content for highest volume tab */}</TabsContent>
          </Tabs>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Predictify. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>

  )
}

