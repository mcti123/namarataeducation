import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-space">
      {/* Add starry background */}
      <div className="stars-layer stars-small"></div>
      <div className="stars-layer stars-medium"></div>
      <div className="stars-layer stars-large"></div>
      
      <Card className="w-full max-w-md mx-4 bg-spaceLight/80 backdrop-blur-md border-spaceMid text-spaceWhite">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center mb-6">
            <AlertCircle className="h-16 w-16 text-red-400 mb-4 animate-pulse" />
            <h1 className="text-3xl font-bold text-spaceWhite mb-2">404: Page Lost in Space</h1>
            <p className="text-lg text-spaceWhite/80">
              Oops! The page you're looking for seems to have drifted off into the cosmos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/">
              <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-indigo-500 text-indigo-400 hover:bg-indigo-500/20"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
