import useSWR from 'swr'
import { fetcher } from '@/helpers'

export default function Index() {
  const { data, error } = useSWR('{ users { name } }', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const { users } = data

  return (
    <div>
      {users.map((user, i) => (
        <div key={i}>{user.name}</div>
      ))}
    </div>
  )
}
