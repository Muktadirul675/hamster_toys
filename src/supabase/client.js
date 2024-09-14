
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://espxftcuydcrkbkyrswq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzcHhmdGN1eWRjcmtia3lyc3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4OTI4MjcsImV4cCI6MjAyNDQ2ODgyN30.v93HoLdnv3JSV7wN8wzO7gtFgFnH7LM0Sl9fDaaMPNE')
