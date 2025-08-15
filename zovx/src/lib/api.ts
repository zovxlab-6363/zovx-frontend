// API configuration
const API_BASE_URL = 'http://localhost:8080/api';

// Types matching your Go backend
export interface Prompt {
  id: number;
  title: string;
  description: string;
  tool: string;
  category: string;
  prompt_text: string;
  is_trending: boolean;
  created_at: string;
}

export interface CreatePromptRequest {
  title: string;
  description: string;
  tool: string;
  category: string;
  prompt_text: string;
}

// API functions
export const promptsAPI = {
  // Get all prompts
  async getAll(): Promise<Prompt[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/prompts`);
      if (!response.ok) {
        throw new Error('Failed to fetch prompts');
      }
      const data = await response.json();
      return data.prompts || [];
    } catch (error) {
      console.error('Error fetching prompts:', error);
      return [];
    }
  },

  // Get trending prompts
  async getTrending(): Promise<Prompt[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/prompts/trending`);
      if (!response.ok) {
        throw new Error('Failed to fetch trending prompts');
      }
      const data = await response.json();
      return data.trending_prompts || [];
    } catch (error) {
      console.error('Error fetching trending prompts:', error);
      return [];
    }
  },

  // Get prompts by tool
  async getByTool(tool: string): Promise<Prompt[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/prompts/tool/${tool}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${tool} prompts`);
      }
      const data = await response.json();
      return data.prompts || [];
    } catch (error) {
      console.error(`Error fetching ${tool} prompts:`, error);
      return [];
    }
  },

  // Get prompts by category
  async getByCategory(category: string): Promise<Prompt[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/prompts/category/${category}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${category} prompts`);
      }
      const data = await response.json();
      return data.prompts || [];
    } catch (error) {
      console.error(`Error fetching ${category} prompts:`, error);
      return [];
    }
  },

  // Create new prompt
  async create(prompt: CreatePromptRequest): Promise<{ success: boolean; id?: number; error?: string }> {
    try {
      const response = await fetch(`${API_BASE_URL}/prompts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prompt),
      });

      if (!response.ok) {
        throw new Error('Failed to create prompt');
      }

      const data = await response.json();
      return { success: true, id: data.id };
    } catch (error) {
      console.error('Error creating prompt:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  },
};

// Health check
export const healthCheck = async (): Promise<boolean> => {
  try {
    const response = await fetch('http://localhost:8080/health');
    return response.ok;
  } catch (error) {
    console.error('Backend health check failed:', error);
    return false;
  }
};
