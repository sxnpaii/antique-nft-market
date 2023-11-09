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
      Artists: {
        Row: {
          avatar: string | null
          collections: string[] | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          nfts: string[] | null
          password: string | null
          phone_num: string | null
          posts: string[] | null
          username: string | null
        }
        Insert: {
          avatar?: string | null
          collections?: string[] | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          nfts?: string[] | null
          password?: string | null
          phone_num?: string | null
          posts?: string[] | null
          username?: string | null
        }
        Update: {
          avatar?: string | null
          collections?: string[] | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          nfts?: string[] | null
          password?: string | null
          phone_num?: string | null
          posts?: string[] | null
          username?: string | null
        }
        Relationships: []
      }
      Collections: {
        Row: {
          artist: string
          collection_description: string | null
          collection_name: string | null
          created_at: string | null
          id: string
          images: string[] | null
          path: string | null
          price: number | null
        }
        Insert: {
          artist: string
          collection_description?: string | null
          collection_name?: string | null
          created_at?: string | null
          id?: string
          images?: string[] | null
          path?: string | null
          price?: number | null
        }
        Update: {
          artist?: string
          collection_description?: string | null
          collection_name?: string | null
          created_at?: string | null
          id?: string
          images?: string[] | null
          path?: string | null
          price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Collections_artist_fkey"
            columns: ["artist"]
            isOneToOne: false
            referencedRelation: "Artists"
            referencedColumns: ["id"]
          }
        ]
      }
      Nfts: {
        Row: {
          artist: string
          created_at: string | null
          description: string | null
          id: string
          img_url: string | null
          name: string | null
          path: string | null
          price: number | null
          style: string[] | null
        }
        Insert: {
          artist: string
          created_at?: string | null
          description?: string | null
          id?: string
          img_url?: string | null
          name?: string | null
          path?: string | null
          price?: number | null
          style?: string[] | null
        }
        Update: {
          artist?: string
          created_at?: string | null
          description?: string | null
          id?: string
          img_url?: string | null
          name?: string | null
          path?: string | null
          price?: number | null
          style?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "Nfts_artist_fkey"
            columns: ["artist"]
            isOneToOne: false
            referencedRelation: "Artists"
            referencedColumns: ["id"]
          }
        ]
      }
      Posts: {
        Row: {
          artist: string
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
          artist: string
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
          artist?: string
          content?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          img_url?: string | null
          path?: string | null
          tags?: string[] | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Posts_artist_fkey"
            columns: ["artist"]
            isOneToOne: false
            referencedRelation: "Artists"
            referencedColumns: ["id"]
          }
        ]
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
