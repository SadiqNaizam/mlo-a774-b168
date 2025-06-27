import React, { useState } from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const ProfilePage = () => {
  console.log('ProfilePage loaded');

  // Mock user data for display, assuming the user is logged in.
  const [user, setUser] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    avatarUrl: 'https://github.com/shadcn.png',
  });

  const handleLogout = () => {
    // In a real app, this would clear auth state and redirect.
    console.log('User logged out.');
  };
  
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile update form submitted.');
    // Add toast notification for success
  }

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password change form submitted.');
    // Add toast notification for success
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Header
        isAuthenticated={true}
        onLogout={handleLogout}
        user={user}
      />
      <main className="flex-1 container mx-auto py-8">
        <div className="mx-auto grid w-full max-w-4xl gap-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">Settings</h1>
            <p className="text-sm text-muted-foreground">
              Manage your account settings and update your information.
            </p>
          </div>
          <Separator />
          
          <div className="grid gap-6">
            {/* Profile Information Card */}
            <Card>
              <form onSubmit={handleProfileUpdate}>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal details here. Your email address cannot be changed.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={user.avatarUrl} alt={user.name} />
                      <AvatarFallback>
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="outline" type="button">Change Avatar</Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={user.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user.email} disabled />
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button type="submit">Save Changes</Button>
                </CardFooter>
              </form>
            </Card>

            {/* Change Password Card */}
            <Card>
              <form onSubmit={handlePasswordChange}>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>
                    For security, please choose a strong password.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" required />
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button type="submit">Update Password</Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;