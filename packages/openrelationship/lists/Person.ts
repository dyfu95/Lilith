import { utils } from '@mirrormedia/lilith-core'
import { list } from '@keystone-6/core';
import { relationship, select, integer, text } from '@keystone-6/core/fields';
	  
const {
  allowRoles,
  admin,
  moderator,
  editor,
  owner,
} = utils.accessControl

const genderOptions = [
  { value: 'F', label: '女' },
  { value: 'M', label: '男' },
  { value: 'NA', label: ' ' },
]

const listConfigurations = list ({
  fields: {
    name: text({ 
	  label: '姓名', 
	  isRequired: true 
	}),
    alternative: text({ 
	  label: '別名',
	  db: {
		isNullable: true,
	  },
	}),
    other_names: text({ 
	  label: '舊名',
	  db: {
		isNullable: true,
	  },
	}),
    email: text({ 
	  label: '電子信箱', 
	  db: {
		isNullable: true,
	  },
	}),
    gender: select({
      label: '生理性別',
      options: genderOptions,
      default: 'NA',
    }),
    birth_date_year: integer({ 
	  label: '出生年',
	  db: {
		isNullable: true,
	  },
	 }),
    birth_date_month: integer({ 
	  label: '出生月',
	  db: {
		isNullable: true,
	  },
	}),
    birth_date_day: integer({ 
	  label: '出生日',
	  db: {
		isNullable: true,
	  },
	}),
    death_date_year: integer({ 
	  label: '死亡年',
	  db: {
		isNullable: true,
	  },
	}),
    death_date_month: integer({ 
	  label: '死亡月',
	  db: {
		isNullable: true,
	  },
	}),
    death_date_day: integer({ 
	  label: '死亡日',
	  db: {
		isNullable: true,
	  },
	}),
    image: text({ 
	  label: '大頭照',
	  db: {
		isNullable: true,
	  },
	}),
    summary: text({ 
	  label: '一句話描寫這個人',
	  db: {
		isNullable: true,
	  },
	}),
    biography: text({ 
	  label: '詳細生平',
	  db: {
		isNullable: true,
	  },
	}),
    national_identity: text({ 
	  label: '國籍',
	  db: {
		isNullable: true,
	  },
	}),
    contact_details: text({ 
	  label: '聯絡方式',
	  db: {
		isNullable: true,
	  },
	}),
    links: text({ 
	  label: '網站',
	  db: {
		isNullable: true,
	  },
	}),
    source: text({ 
	  label: '資料來源',
	  db: {
		isNullable: true,
	  },
	}),
  },
  access: {
	operation: {
	  query: allowRoles(admin, moderator, editor),
	  update: allowRoles(admin, moderator),
	  create: allowRoles(admin, moderator),
	  delete: allowRoles(admin),
	},
  },
})
export default utils.addTrackingFields(listConfigurations)
