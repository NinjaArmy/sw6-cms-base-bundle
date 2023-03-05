<?php declare(strict_types=1);

namespace NINJA\CmsBaseBundle\DataResolver;

use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\EntityResolverContext;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use Shopware\Core\Content\Cms\DataResolver\Element\AbstractCmsElementResolver;
use NINJA\CmsButton\Struct\NINJACmsButtonStruct;


class NINJACmsButtonDataResolver extends AbstractCmsElementResolver
{
    public function getType(): string
    {
        return 'cms-button';
    }

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        return null;
    }

    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {
        $cmsButton = new NinjaCmsButtonStruct();
        $slot->setData($cmsButton);

        $config = $slot->getFieldConfig()->get('content');
        if (!$config) {
            return;
        }

        if ($config->isMapped() && $resolverContext instanceof EntityResolverContext) {
            $content = $this->resolveEntityValue($resolverContext->getEntity(), $config->getValue());

            $cmsButton->setContent((string) $content);
        }

        if ($config->isStatic()) {
            if ($resolverContext instanceof EntityResolverContext) {
                $content = $this->resolveEntityValues($resolverContext, $config->getValue());

                $cmsButton->setContent((string) $content);
            } else {
                $cmsButton->setContent((string) $config->getValue());
            }
        }
    }
}
