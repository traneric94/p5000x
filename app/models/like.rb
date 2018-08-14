# == Schema Information
#
# Table name: likes
#
#  id       :bigint(8)        not null, primary key
#  user_id  :integer          not null
#  photo_id :integer          not null
#

class Like < ApplicationRecord
  validates :user_id, :photo_id, presence: true

  belongs_to :photo,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :Photo

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
  
end
