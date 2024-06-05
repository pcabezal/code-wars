function solution(nums){
  if (nums == null || nums.lenth == 0) return []
  return nums.sort((a,b) => a-b)
}