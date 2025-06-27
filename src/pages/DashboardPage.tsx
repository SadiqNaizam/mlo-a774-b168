import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const DashboardPage = () => {
  console.log('DashboardPage loaded');

  // Placeholder function for logout action
  const handleLogout = () => {
    console.log('User initiated logout.');
    // In a real app, this would clear auth state and redirect
  };

  // Placeholder user data for the Header
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header isAuthenticated={true} onLogout={handleLogout} user={user} />

      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Welcome Back, {user.name}!</CardTitle>
            <CardDescription className="pt-2">
              You are successfully logged in. You can manage your account and settings from your profile.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm text-muted-foreground">What would you like to do next?</p>
            <Button asChild size="lg">
              <Link to="/profile">View My Profile</Link>
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;