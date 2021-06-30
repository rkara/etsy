export interface EtsyUser {
  user_id: number;
  login_name: string;
  primary_email: string;
  first_name: string;
  last_name: string;
  create_timestamp: number;
  referred_by_user_id: number;
  use_new_inventory_endpoints: true;
  is_seller: true;
  bio: string;
  gender: string;
  birth_month: string;
  birth_day: string;
  transaction_buy_count: number;
  transaction_sold_count: number;
}
