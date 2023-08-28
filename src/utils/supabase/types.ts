export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Collections: {
        Row: {
          artist: string | null
          collection_description: string | null
          collection_name: string | null
          created_at: string | null
          id: string
          images: string[] | null
          path: string | null
          price: number | null
        }
        Insert: {
          artist?: string | null
          collection_description?: string | null
          collection_name?: string | null
          created_at?: string | null
          id?: string
          images?: string[] | null
          path?: string | null
          price?: number | null
        }
        Update: {
          artist?: string | null
          collection_description?: string | null
          collection_name?: string | null
          created_at?: string | null
          id?: string
          images?: string[] | null
          path?: string | null
          price?: number | null
        }
        Relationships: []
      }
      nft_attributes: {
        Row: {
          artist: string | null
          id: string
          style: string | null
        }
        Insert: {
          artist?: string | null
          id?: string
          style?: string | null
        }
        Update: {
          artist?: string | null
          id?: string
          style?: string | null
        }
        Relationships: []
      }
      Nfts: {
        Row: {
          attributes: string | null
          created_at: string | null
          description: string | null
          id: string
          img_url: string | null
          name: string | null
          path: string | null
          price: number | null
        }
        Insert: {
          attributes?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          img_url?: string | null
          name?: string | null
          path?: string | null
          price?: number | null
        }
        Update: {
          attributes?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          img_url?: string | null
          name?: string | null
          path?: string | null
          price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Nfts_attributes_fkey"
            columns: ["attributes"]
            referencedRelation: "nft_attributes"
            referencedColumns: ["id"]
          }
        ]
      }
      Posts: {
        Row: {
          author_artist: string | null
          content: string | null
          created_at: string | null
          description: string | null
          id: string
          img_url: string | null
          path: string | null
          tags: string[] | null
          title: string | null
        }
        Insert: {
          author_artist?: string | null
          content?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          img_url?: string | null
          path?: string | null
          tags?: string[] | null
          title?: string | null
        }
        Update: {
          author_artist?: string | null
          content?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          img_url?: string | null
          path?: string | null
          tags?: string[] | null
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
