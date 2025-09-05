"use client";
import {
  Home,
  Users,
  Zap,
  Shield,
  Building,
  BarChart3,
  ArrowRightLeft,
  Target,
  Calculator,
  TrendingUp,
  FileText,
  MoreHorizontal,
} from "lucide-react";

const navigationItems = [
  { name: "Home", icon: Home, active: true },
  { name: "CRM", icon: Users },
  { name: "Utilities", icon: Zap },
  { name: "Insurance", icon: Shield },
  { name: "Assets", icon: Building },
  { name: "Mutual", icon: BarChart3 },
  { name: "Research", icon: TrendingUp },
  { name: "Transact Online", icon: ArrowRightLeft },
  { name: "Goal GPS", icon: Target },
  { name: "Financial Planning", icon: Calculator },
  { name: "Wealth Report", icon: FileText },
  { name: "Other", icon: MoreHorizontal },
];

export default function Navigation() {
  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-14">
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                className={`nav-item flex items-center space-x-2 ${
                  item.active ? "bg-red-700" : ""
                }`}
              >
                <span>{item.name}</span>
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button className="nav-item">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
