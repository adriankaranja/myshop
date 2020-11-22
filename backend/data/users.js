import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Gabrielle Stinko',
		email: 'gabby@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Hidaya Daya',
		email: 'hidan@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
]

export default users
