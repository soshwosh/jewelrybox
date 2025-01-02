ALTER TABLE "jewelry_items" RENAME COLUMN "image_url" TO "imageUrl";--> statement-breakpoint
ALTER TABLE "jewelry_items" ALTER COLUMN "name" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "jewelry_items" ALTER COLUMN "type" SET DEFAULT 'earrings';--> statement-breakpoint
ALTER TABLE "jewelry_items" ALTER COLUMN "type" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "jewelry_items" ALTER COLUMN "material" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "jewelry_items" ALTER COLUMN "color" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "jewelry_items" ALTER COLUMN "brand" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "jewelry_items" ALTER COLUMN "notes" SET DEFAULT '';