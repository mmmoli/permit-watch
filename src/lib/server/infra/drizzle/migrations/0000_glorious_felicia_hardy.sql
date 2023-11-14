CREATE TABLE IF NOT EXISTS "permits_permit" (
	"id" uuid PRIMARY KEY NOT NULL,
	"applicant_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "permits_user" (
	"id" text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "permits_permit" ADD CONSTRAINT "permits_permit_applicant_id_permits_user_id_fk" FOREIGN KEY ("applicant_id") REFERENCES "permits_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
