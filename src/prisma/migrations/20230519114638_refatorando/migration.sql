-- DropForeignKey
ALTER TABLE "itens" DROP CONSTRAINT "itens_order_id_fkey";

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "itens_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
