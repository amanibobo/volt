import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button"
  import { ChevronDown, Plus, Share2, MessageSquare } from "lucide-react"
  
  export default function TableType() {
    return (
      <div className="w-full max-w-[1200px] mx-auto p-4 border border-gray-200 rounded-lg mb-12">
        <div className="mb-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Home</span>
              <ChevronDown className="h-4 w-4" />
              <span>Companies Overview</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>
  
          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Founders</TableHead>
                <TableHead>Target Markets</TableHead>
                <TableHead>Recent Founder News</TableHead>
                <TableHead>Employee Count</TableHead>
                <TableHead>Total Funding</TableHead>
                <TableHead>Current Evaluation</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs">A</div>
                    Airbnb
                  </div>
                </TableCell>
                <TableCell>Brian Chesky, Nathan Blecharczyk, and Joe Gebbia</TableCell>
                <TableCell>
                  <div className="flex gap-1 flex-wrap">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">B2C</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">Consumer</span>
                  </div>
                </TableCell>
                <TableCell className="max-w-[200px] truncate">Recent news involving Airbnb founders includes a significant...</TableCell>
                <TableCell>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">5000+</span>
                </TableCell>
                <TableCell>$8.7B</TableCell>
                <TableCell>$73.6B</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs">A</div>
                    Amplitude
                  </div>
                </TableCell>
                <TableCell>Spenser Skates, Curtis Li, and Jeffrey Wang</TableCell>
                <TableCell>
                  <div className="flex gap-1 flex-wrap">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">B2B</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">Enterprise</span>
                    <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">SMB</span>
                  </div>
                </TableCell>
                <TableCell className="max-w-[200px] truncate">Spenser Skates, Amplitudes CEO, recently discussed the...</TableCell>
                <TableCell>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">501-1000</span>
                </TableCell>
                <TableCell>$336M</TableCell>
                <TableCell>$1.1B</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }