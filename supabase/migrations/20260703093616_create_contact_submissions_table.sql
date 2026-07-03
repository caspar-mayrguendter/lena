/*
# Create contact_submissions table for wedding booking inquiries

1. New Tables
- `contact_submissions`
- `id` (uuid, primary key)
- `name` (text, not null)
- `email` (text, not null)
- `event_date` (date, optional)
- `event_type` (text, optional)
- `message` (text, not null)
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated to insert (contact form submissions).
- Only authenticated can read (admin access later if needed).
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  event_date date,
  event_type text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);
