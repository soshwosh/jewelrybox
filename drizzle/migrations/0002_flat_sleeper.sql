CREATE TABLE "jewelry_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"userid" integer,
	"name" varchar(30),
	"type" varchar(10) NOT NULL,
	"material" varchar(30),
	"color" varchar(10),
	"brand" varchar(30),
	"notes" text,
	"image_url" text
);
--> statement-breakpoint
CREATE TABLE "pairings" (
	"id" serial PRIMARY KEY NOT NULL,
	"userid" integer,
	"title" varchar(30),
	"items" integer[]
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(100),
	"password" varchar(16)
);
--> statement-breakpoint
ALTER TABLE "jewelry_items" ADD CONSTRAINT "jewelry_items_userid_fkey" FOREIGN KEY ("userid") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pairings" ADD CONSTRAINT "pairings_userid_fkey" FOREIGN KEY ("userid") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;