"use client";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { usePlausible } from "next-plausible";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const foods = [
  {
    title: "Đồ Hàn",
    image: "/food/korea.jpeg",
  },
  {
    title: "Đồ Nhật",
    image: "/food/japan.jpeg",
  },
  {
    title: "Đồ Thái",
    image: "/food/thai.jpeg",
  },
  {
    title: "Đồ Âu",
    image: "/food/eu.jpeg",
  },
  {
    title: "Burger",
    image: "/food/burger.jpeg",
  },
  {
    title: "Beefsteak",
    image: "/food/beefsteak.jpeg",
  },
  {
    title: "Pizza",
    image: "/food/pizza.jpeg",
  },
];

const FoodCard = ({
  title,
  image,
  className,
  func,
}: {
  title: string;
  image: string;
  className: string | null;
  func: (food: string) => void;
}) => {
  return (
    <Card
      className={cn("hover:cursor-pointer", className)}
      onClick={() => func(title)}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          alt={title}
          src={image}
          width={200}
          height={150}
          className="rounded-md object-cover"
        />
      </CardContent>
    </Card>
  );
};

const SubmitButton = ({ food }: { food: string | null }) => {
  const plausible = usePlausible();
  const searchParams = useSearchParams();
  const router = useRouter();

  const dayProps = searchParams.get("day");

  return (
    <Button
      disabled={!food}
      onClick={() => {
        plausible("valentine", {
          props: {
            day: dayProps,
            food,
          },
        });
        router.push(`/valentine/thank-you?day=${dayProps}&food=${food}`);
      }}
    >
      Tiếp tục
    </Button>
  );
};

export default function FoodPage() {
  const [food, setFood] = React.useState<string | null>(null);

  function handleFoodClick(food: string) {
    setFood(food);
  }

  return (
    <div className="bg-gradient-to-r from-pink-300 to-pink-500 min-h-screen">
      <Shell>
        <PageHeader>
          <PageHeaderHeading size="lg" className="text-white ">
            Chọn món ăn
          </PageHeaderHeading>
          <PageHeaderDescription size="sm" className="text-white ">
            Baby thích ăn gì nào, chọn 1 trong những món bên dưới nhé
          </PageHeaderDescription>
        </PageHeader>
        <div className="p-6 flex space-y-4 flex-col items-center justify-center">
          <div className="flex flex-wrap gap-4">
            {foods.map((item, i) => (
              <FoodCard
                key={i}
                title={item.title}
                image={item.image}
                className={
                  item.title === food
                    ? "bg-primary/50 border-primary scale-105"
                    : null
                }
                func={handleFoodClick}
              />
            ))}
          </div>
          <React.Suspense>
            <SubmitButton food={food} />
          </React.Suspense>
        </div>
      </Shell>
    </div>
  );
}
