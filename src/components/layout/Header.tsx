'use client';

import { useNavigationStore } from '@/store/navigation-store';
import { Menu, Shield, Moon, Sun, PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModelSelector } from '@/components/settings/ModelSelector';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function Header() {
  const { sidebarOpen, sidebarCollapsed, toggleSidebar } = useNavigationStore();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) : true;

  const toggleTheme = () => {
    const currentIsDark = document.documentElement.classList.contains('dark');
    setTheme(currentIsDark ? 'light' : 'dark');
  };

  return (
    <header className="h-14 border-b border-border flex items-center gap-3 px-3 shrink-0 bg-background z-50">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={toggleSidebar}
        title={sidebarOpen ? 'Свернуть панель' : 'Развернуть панель'}
      >
        {sidebarOpen ? <PanelLeft className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      <div className="flex items-center gap-2 flex-1 min-w-0">
        <Shield className="h-5 w-5 text-red-500 shrink-0" />
        <span className="font-bold text-base truncate">LLM Red Team Lab</span>
        <span className="text-xs text-red-400/60 hidden sm:inline">Offensive Security</span>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        <ModelSelector />

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={toggleTheme}
          title={isDark ? 'Светлая тема' : 'Тёмная тема'}
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  );
}
