# == Schema Information
#
# Table name: follows
#
#  id          :bigint(8)        not null, primary key
#  followee_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  validates :followee_id, :follower_id, presence: true

  belongs_to :followee,
  foreign_key: :followee_id,
  class_name: :User

  belongs_to :follower,
  foreign_key: :follower_id,
  class_name: :User


end
