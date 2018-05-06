# Steem Methods
A simple list of all the methods available in steem api.

> This is self-generated documentation, please do not try to send PR to this file directly.

The official documentation together with the description you find [here](https://developers.steem.io/apidefinitions/).

## account_by_key

METHOD | PARAMS | RETURN
-------|--------|-------
get_key_references | keys | accounts


### Exemples

```js
client.accountByKey.get_key_references(keys)
  .then(result => {  })

```
 
## block

METHOD | PARAMS | RETURN
-------|--------|-------
get_block | block_num | 
get_block_header | block_num | 


### Exemples

```js
client.block.getBlockHeader(block_num)
  .then(result => {  })

client.block.getBlock(block_num)
  .then(result => {  })

```
 
## condenser

METHOD | PARAMS | RETURN
-------|--------|-------
broadcast_block |  | 
broadcast_transaction |  | 
broadcast_transaction_synchronous |  | id, block_num, trx_num, expired
get_account_bandwidth |  | 
get_account_count |  | 
get_account_history |  | 
get_account_references |  | 
get_account_reputations |  | 
get_account_votes |  | 
get_accounts |  | 
get_active_votes |  | 
get_active_witnesses |  | 
get_block |  | 
get_block_header |  | 
get_blog |  | 
get_blog_authors |  | 
get_blog_entries |  | 
get_chain_properties |  | account_creation_fee, maximum_block_size, sbd_interest_rate
get_comment_discussions_by_payout |  | 
get_config |  | 
get_content |  | id, author, permlink, category, parent_author, parent_permlink, title, body, json_metadata, last_update, created, active, last_payout, depth, children, net_rshares, abs_rshares, vote_rshares, children_abs_rshares, cashout_time, max_cashout_time, total_vote_weight, reward_weight, total_payout_value, curator_payout_value, author_rewards, net_votes, root_author, root_permlink, max_accepted_payout, percent_steem_dollars, allow_replies, allow_votes, allow_curation_rewards, beneficiaries, url, root_title, pending_payout_value, total_pending_payout_value, active_votes, replies, author_reputation, promoted, body_length, reblogged_by
get_content_replies |  | 
get_conversion_requests |  | 
get_current_median_history_price |  | base, quote
get_discussions_by_active |  | 
get_discussions_by_author_before_date |  | 
get_discussions_by_blog |  | 
get_discussions_by_cashout |  | 
get_discussions_by_children |  | 
get_discussions_by_comments |  | 
get_discussions_by_created |  | 
get_discussions_by_feed |  | 
get_discussions_by_hot |  | 
get_discussions_by_promoted |  | 
get_discussions_by_trending |  | 
get_discussions_by_votes |  | 
get_dynamic_global_properties |  | head_block_number, head_block_id, time, current_witness, total_pow, num_pow_witnesses, virtual_supply, current_supply, confidential_supply, current_sbd_supply, confidential_sbd_supply, total_vesting_fund_steem, total_vesting_shares, total_reward_fund_steem, total_reward_shares2, pending_rewarded_vesting_shares, pending_rewarded_vesting_steem, sbd_interest_rate, sbd_print_rate, maximum_block_size, current_aslot, recent_slots_filled, participation_count, last_irreversible_block_num, vote_power_reserve_rate, average_block_size, current_reserve_ratio, max_virtual_bandwidth
get_escrow |  | 
get_expiring_vesting_delegations |  | 
get_feed |  | 
get_feed_entries |  | 
get_feed_history |  | id, current_median_history, price_history
get_follow_count |  | account, follower_count, following_count
get_followers |  | 
get_following |  | 
get_hardfork_version |  | 0, 1, 2, 3, 4
get_key_references |  | 
get_market_history |  | 
get_market_history_buckets |  | 
get_next_scheduled_hardfork |  | hf_version, live_time
get_open_orders |  | 
get_ops_in_block |  | 
get_order_book |  | bids, asks
get_owner_history |  | 
get_post_discussions_by_payout |  | 
get_potential_signatures |  | 
get_reblogged_by |  | 
get_recent_trades |  | 
get_recovery_request |  | 
get_replies_by_last_update |  | 
get_required_signatures |  | 
get_reward_fund |  | id, name, reward_balance, recent_claims, last_update, content_constant, percent_curation_rewards, percent_content_rewards, author_reward_curve, curation_reward_curve
get_savings_withdraw_from |  | 
get_savings_withdraw_to |  | 
get_state |  | current_route, props, tag_idx, tags, content, accounts, witnesses, discussion_idx, witness_schedule, feed_price, error
get_tags_used_by_author |  | 
get_ticker |  | latest, lowest_ask, highest_bid, percent_change, steem_volume, sbd_volume
get_trade_history |  | 
get_transaction |  | ref_block_num, ref_block_prefix, expiration, operations, extensions, signatures, transaction_id, block_num, transaction_num
get_transaction_hex |  | 
get_trending_tags |  | 
get_version |  | blockchain_version, steem_revision, fc_revision
get_vesting_delegations |  | 
get_volume |  | steem_volume, sbd_volume
get_withdraw_routes |  | 
get_witness_by_account |  | 
get_witness_count |  | 
get_witness_schedule |  | id, current_virtual_time, next_shuffle_block_num, current_shuffled_witnesses, num_scheduled_witnesses, top19_weight, timeshare_weight, miner_weight, witness_pay_normalization_factor, median_props, majority_version, max_voted_witnesses, max_miner_witnesses, max_runner_witnesses, hardfork_required_witnesses
get_witnesses |  | 
get_witnesses_by_vote |  | 
lookup_account_names |  | 
lookup_accounts |  | 
lookup_witness_accounts |  | 
verify_account_authority |  | 
verify_authority |  | 


### Exemples

```js
client.condenser.get_discussions_by_active()
  .then(result => {  })

client.condenser.getActiveVotes()
  .then(result => {  })

```
 
## database

METHOD | PARAMS | RETURN
-------|--------|-------
find_account_recovery_requests | accounts | requests
find_accounts | accounts | accounts
find_change_recovery_account_requests | accounts | requests
find_comments | comments | comments
find_decline_voting_rights_requests | accounts | requests
find_escrows | from | escrows
find_limit_orders | account | orders
find_owner_histories | owner | owner_auths
find_savings_withdrawals | account | withdrawals
find_sbd_conversion_requests | account | requests
find_vesting_delegation_expirations | account | delegations
find_vesting_delegations | account | delegations
find_votes | author, permlink | votes
find_withdraw_vesting_routes | account, order | routes
find_witnesses | owners | witnesses
get_active_witnesses |  | witnesses
get_config |  | 
get_current_price_feed |  | base, quote
get_dynamic_global_properties |  | id, head_block_number, head_block_id, time, current_witness, total_pow, num_pow_witnesses, virtual_supply, current_supply, confidential_supply, current_sbd_supply, confidential_sbd_supply, total_vesting_fund_steem, total_vesting_shares, total_reward_fund_steem, total_reward_shares2, pending_rewarded_vesting_shares, pending_rewarded_vesting_steem, sbd_interest_rate, sbd_print_rate, maximum_block_size, current_aslot, recent_slots_filled, participation_count, last_irreversible_block_num, vote_power_reserve_rate
get_feed_history |  | id, current_median_history, price_history
get_hardfork_properties |  | id, processed_hardforks, last_hardfork, current_hardfork_version, next_hardfork, next_hardfork_time
get_order_book | limit | asks, bids
get_potential_signatures | trx | keys
get_required_signatures | trx, available_keys | keys
get_reward_funds |  | funds
get_transaction_hex | trx | hex
get_witness_schedule |  | id, current_virtual_time, next_shuffle_block_num, current_shuffled_witnesses, num_scheduled_witnesses, top19_weight, timeshare_weight, miner_weight, witness_pay_normalization_factor, median_props, majority_version, max_voted_witnesses, max_miner_witnesses, max_runner_witnesses, hardfork_required_witnesses
list_account_recovery_requests | start, limit, order | requests
list_accounts | start, limit, order | accounts
list_change_recovery_account_requests | start, limit, order | requests
list_comments | start, limit, order | comments
list_decline_voting_rights_requests | start, limit, order | requests
list_escrows | start, limit, order | escrows
list_limit_orders | start, limit, order | orders
list_owner_histories | start, limit | owner_auths
list_savings_withdrawals | start, limit, order | withdrawals
list_sbd_conversion_requests | start, limit, order | requests
list_vesting_delegation_expirations | start, limit, order | delegations
list_vesting_delegations | start, limit, order | delegations
list_votes | start, limit, order | votes
list_withdraw_vesting_routes | start, limit, order | routes
list_witness_votes | start, limit, order | votes
list_witnesses | start, limit, order | witnesses
verify_account_authority | account, signers | valid
verify_authority | trx | valid
verify_signatures | hash, signatures, required_owner, required_active, required_posting, required_other | valid


### Exemples

```js
client.database.list_votes(start, limit, order)
  .then(result => {  })

client.database.listSbdConversionRequests(start, limit, order)
  .then(result => {  })

```
 
## follow

METHOD | PARAMS | RETURN
-------|--------|-------
get_account_reputations | account_lower_bound, limit | reputations
get_blog | account, start_entry_id, limit | blog
get_blog_authors | blog_account | blog_authors
get_blog_entries | account, start_entry_id, limit | blog
get_feed | account, start_entry_id, limit | feed
get_feed_entries | account, start_entry_id, limit | feed
get_follow_count | account | account, follower_count, following_count
get_followers | account, start, type, limit | followers
get_following | account, start, type, limit | following
get_reblogged_by | author, permlink | accounts


### Exemples

```js
client.follow.getFollowCount(account)
  .then(result => {  })

client.follow.getFollowing(account, start, type, limit)
  .then(result => {  })

```
 
## jsonrpc

METHOD | PARAMS | RETURN
-------|--------|-------
get_methods |  | 
get_signature | method | args, ret


### Exemples

```js
client.jsonrpc.getSignature(method)
  .then(result => {  })

client.jsonrpc.get_methods()
  .then(result => {  })

```
 
## market_history

METHOD | PARAMS | RETURN
-------|--------|-------
get_market_history | bucket_seconds, start, end | buckets
get_market_history_buckets |  | bucket_sizes
get_order_book | limit | bids, asks
get_recent_trades | limit | trades
get_ticker |  | latest, lowest_ask, highest_bid, percent_change, steem_volume, sbd_volume
get_trade_history | start, end, limit | trades
get_volume |  | steem_volume, sbd_volume


### Exemples

```js
client.marketHistory.get_recent_trades(limit)
  .then(result => {  })

client.marketHistory.get_market_history(bucket_seconds, start, end)
  .then(result => {  })

```
 
## network_broadcast

METHOD | PARAMS | RETURN
-------|--------|-------
broadcast_block | block | 
broadcast_transaction | trx, max_block_age | 
broadcast_transaction_synchronous | trx, max_block_age | id, block_num, trx_num, expired


### Exemples

```js
client.networkBroadcast.broadcast_block(block)
  .then(result => {  })

client.networkBroadcast.broadcast_transaction(trx, max_block_age)
  .then(result => {  })

```
 
## tags

METHOD | PARAMS | RETURN
-------|--------|-------
get_active_votes | author, permlink | votes
get_comment_discussions_by_payout | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_content_replies | author, permlink | discussions
get_discussion | author, permlink | id, author, permlink, category, parent_author, parent_permlink, title, body, json_metadata, last_update, created, active, last_payout, depth, children, net_rshares, abs_rshares, vote_rshares, children_abs_rshares, cashout_time, max_cashout_time, total_vote_weight, reward_weight, total_payout_value, curator_payout_value, author_rewards, net_votes, root_author, root_permlink, max_accepted_payout, percent_steem_dollars, allow_replies, allow_votes, allow_curation_rewards, beneficiaries, url, root_title, pending_payout_value, total_pending_payout_value, active_votes, replies, author_reputation, promoted, body_length, reblogged_by
get_discussions_by_active | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_discussions_by_author_before_date | author, start_permlink, before_date, limit | discussions
get_discussions_by_blog | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_discussions_by_cashout | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_discussions_by_children | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_discussions_by_comments | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_discussions_by_created | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_discussions_by_feed | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_discussions_by_hot | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_discussions_by_promoted | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_discussions_by_trending | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_discussions_by_votes | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_post_discussions_by_payout | tag, limit, filter_tags, select_authors, select_tags, truncate_body | discussions
get_replies_by_last_update | start_parent_author, start_permlink, limit | discussions
get_tags_used_by_author | author | tags
get_trending_tags | start_tag, limit | tags


### Exemples

```js
client.tags.get_discussions_by_votes(tag, limit, filter_tags, select_authors, select_tags, truncate_body)
  .then(result => {  })

client.tags.get_discussions_by_hot(tag, limit, filter_tags, select_authors, select_tags, truncate_body)
  .then(result => {  })

```
 
## witness

METHOD | PARAMS | RETURN
-------|--------|-------
get_account_bandwidth | account, type | 
get_reserve_ratio |  | id, average_block_size, current_reserve_ratio, max_virtual_bandwidth


### Exemples

```js
client.witness.get_account_bandwidth(account, type)
  .then(result => {  })

client.witness.get_reserve_ratio()
  .then(result => {  })

```
