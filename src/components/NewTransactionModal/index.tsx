import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'

import {
  Overlay,
  CloseButton,
  Content,
  Title,
  TransactionModalContainer,
  TransactionType,
  TransactionTypeButton,
} from './styles'

const newTransactionModalSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type newTransactionModalTypes = zod.infer<typeof newTransactionModalSchema>

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionModalTypes>({
    resolver: zodResolver(newTransactionModalSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleNewTransaction(data: newTransactionModalTypes) {
    await new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(true)
      }, 3000),
    )

    console.log(data)
  }

  return (
    <TransactionModalContainer>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Title>Nova transação</Title>

        <form action="submit" onSubmit={handleSubmit(handleNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            disabled={isSubmitting}
            {...register('description')}
          />

          <input
            type="number"
            placeholder="Preço"
            disabled={isSubmitting}
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            disabled={isSubmitting}
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TransactionType
                disabled={isSubmitting}
                onValueChange={field.onChange}
                value={field.value}
              >
                <TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>

                <TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </TransactionModalContainer>
  )
}
